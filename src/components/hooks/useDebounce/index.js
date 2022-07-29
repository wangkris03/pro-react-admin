import { useRef, useEffect, useCallback } from 'react'

const useDebounce = (fn, delay) => {
  const timerRef = useRef(null)
  const fnRef = useRef(fn)

  fnRef.current = fn

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    },
    []
  )

  const fnDebounced = useCallback(
    (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = setTimeout(() => {
        const that = this
        fnRef.current.apply(that, args)
      }, delay)
    },
    [delay]
  )

  return fnDebounced
}

export default useDebounce

// const getRes = useCallback(
//   (v) => {
//     fakeFetch({
//       value: v,
//       duration,
//     }).then((res) => {
//       setRes(res);
//     });
//   },
//   [duration]
// );

// const getResDebounced = useDebounceFn(getRes, 500);

// const onChange = useCallback(
//   (e) => {
//     getResDebounced(e.target.value);
//   },
//   [getResDebounced]
// );
