import Chore exposing (update, view)
import StartApp.Simple exposing (start)

main =
  start
    { model =
      { id = 1
      , location = "Bathroom"
      , title = "Clean Bathroom"
      , isCompleted = False
      }
    , update = update
    , view = view
    }
