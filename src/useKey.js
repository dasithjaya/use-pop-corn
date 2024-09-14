import { useEffect } from "react";

export function useKey(keyName, triggerFunction) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === keyName.toLowerCase()) {
          //   onCloseMovie();
          triggerFunction();
        }
      }
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [triggerFunction, keyName]
  );
}
