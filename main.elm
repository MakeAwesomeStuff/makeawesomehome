import Chore exposing (update, view)
import Date
import Time
import StartApp.Simple exposing (start)

main =
  start
    { model =
      { id = 1
      , location = "Bathroom"
      , title = "Clean Bathroom"
      , isCompleted = False
      , date = Time.timestamp
      }
    , update = update
    , view = view
    }
