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
    | Remove ID
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

    Remove id ->
      { model |
          chores = List.filter (\(choreID, _) -> choreID /= id) model.chores
      }

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
  let insert = button [ onClick address Insert ] [ text "Add" ]
  in
      div [] (insert :: List.map (viewChore address) model.chores)


viewChore : Signal.Address Action -> (ID, Chore.Model) -> Html
viewChore address (id, model) =
  let context =
        Chore.Context
          (Signal.forwardTo address (Modify id))
          (Signal.forwardTo address (always (Remove id)))
  in
      Chore.viewWithRemoveButton context model