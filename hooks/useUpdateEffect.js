import { useEffect, useRef } from 'react';

function useUpdateEffect(effect, deps) {
  const isInitialMount = useRef(true);

  useEffect(
    isInitialMount.current
      ? () => {
          isInitialMount.current = false;
        }
      : effect,
    deps
  );
}

export default useUpdateEffect;
