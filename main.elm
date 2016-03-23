import ChorePair exposing (init, update, view)
import StartApp.Simple exposing (start)

main =
  start
    { model = init
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
    , update = update
    , view = view
    }
