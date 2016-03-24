module ChoreList where

import Chore
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)


-- MODEL

type alias Model =
    { chores : List ( ID, Chore.Model )
    , nextID : ID
    }

type alias ID = Int


init : Model
init =
    { chores = []
    , nextID = 0
    }


-- UPDATE

type Action
    = Insert
    | Remove
    | Modify ID Chore.Action

update : Action -> Model -> Model
update action model =
  case action of
    Insert ->
      let newChore =
              ( model.nextID
              , Chore.init
                  { id = model.nextID
                  , location = "Bathroom"
                  , title = "Clean Bathroom"
                  , isCompleted = False
                  }
              )
          newChores = model.chores ++ [ newChore ]
      in
          { model |
              chores = newChores,
              nextID = model.nextID + 1
          }

    Remove ->
      { model | chores = List.drop 1 model.chores }

    Modify id choreAction ->
      let updateChore (choreID, choreModel) =
          if choreID == id
              then (choreID, Chore.update choreAction choreModel)
              else (choreID, choreModel)
      in
          { model | chores = List.map updateChore model.chores }


-- VIEW

view : Signal.Address Action -> Model -> Html
view address model =
  let chores = List.map (viewChore address) model.chores
      remove = button [ onClick address Remove ] [ text "Remove" ]
      insert = button [ onClick address Insert ] [ text "Add" ]
  in
      div [] ([remove, insert] ++ chores)

viewChore : Signal.Address Action -> (ID, Chore.Model) -> Html
viewChore address (id, model) =
  Chore.view (Signal.forwardTo address (Modify id)) model