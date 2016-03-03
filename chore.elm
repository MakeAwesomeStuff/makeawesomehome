module Chore where

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


-- UPDATE

type Action = Complete

update : Action -> Model -> Model
update action model =
  case action of
    Complete ->
      { model | isCompleted = True }


-- VIEW

view : Signal.Address Action -> Model -> Html
view address model =
  div [ choreStyle ]
    [ div [ ] [ text (model.title ++ " isCompleted:" ++ toString model.isCompleted) ]
    , button [ onClick address Complete ] [ text "Complete" ]
    ]


choreStyle : Attribute
choreStyle =
  style
    [ ("border", "1px solid #ccc")
    , ("display", "inline-block")
    , ("font-size", "20px")
    , ("font-family", "monospace")
    , ("padding", "20px")
    , ("text-align", "center")
    ]