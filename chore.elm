module Chore (Model, init, Action, update, view) where

import Html exposing (..)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)


-- MODEL

type alias Model =
  { id: Int
  , location: String
  , title: String
  , isCompleted: Bool
  }

init : Model -> Model
init chore = chore


-- UPDATE

type Action
  = Toggle

update : Action -> Model -> Model
update action model =
  case action of
    Toggle ->
      { model | isCompleted = not model.isCompleted }


-- VIEW

view : Signal.Address Action -> Model -> Html
view address model =
  div [ choreStyle ]
    [ div [ ] [ text (model.title ++ " isCompleted:" ++ toString model.isCompleted) ]
    , button [ onClick address Toggle ] [ text "Toggle" ]
    ]


choreStyle : Attribute
choreStyle =
  style
    [ ("box-shadow", "inset 0px 0px 0px 1px #ccc")
    , ("color", "#333")
    , ("display", "flex")
    , ("font-size", "24px")
    , ("font-weight", "bold")
    , ("max-width", "360px")
    , ("margin", "15px")
    , ("padding", "15px")
    , ("transition"
      , "background 0.15s ease-in-out, box-shadow 0.15s ease-in-out")
    , ("width", "100%")
    ]