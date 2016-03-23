module ChorePair where

import Chore
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)


-- MODEL

type alias Model =
    { topChore : Chore.Model
    , bottomChore : Chore.Model
    }


init : Chore.Model -> Chore.Model -> Model
init top bottom =
    { topChore = Chore.init top
    , bottomChore = Chore.init bottom
    }


-- UPDATE

type Action
    = Reset
    | Top Chore.Action
    | Bottom Chore.Action


update : Action -> Model -> Model
update action model =
  case action of
    Reset ->
      init
        { id = 1
        , location = "Bathroom"
        , title = "Clean Bathroom"
        , isCompleted = False
        }
        { id = 1
        , location = "Bathroom"
        , title = "Clean Bathroom"
        , isCompleted = False
        }

    Top act ->
      { model |
          topChore = Chore.update act model.topChore
      }

    Bottom act ->
      { model |
          bottomChore = Chore.update act model.bottomChore
      }


-- VIEW

view : Signal.Address Action -> Model -> Html
view address model =
  div []
    [ Chore.view (Signal.forwardTo address Top) model.topChore
    , Chore.view (Signal.forwardTo address Bottom) model.bottomChore
    , button [ onClick address Reset ] [ text "RESET" ]
    ]