import React, { useEffect, useReducer, useCallback, useRef } from 'react';
import { debounce } from 'debounce';

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;

const reducer = (state, action) => {
  switch (action.type) {
    case 'set': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'onGrabData': {
      return {
        ...state,
        loading: false,
        currentPage: state.currentPage + 1,
        searchData: [...state.searchData, ...action.payload.searchData],
      };
    }
    default:
      return state;
  }
};

const YourComponent = ({ triggerRef, onGrabData, options }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    currentPage: 1,
    searchData: [],
  });

  const _handleEntry = async (entry) => {
    const boundingRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;

    if (
      !state.loading &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      dispatch({ type: 'set', payload: { loading: true } });
      const searchData = await onGrabData(state.currentPage);
      dispatch({ type: 'onGrabData', payload: { searchData } });
    }
  };
  const handleEntry = useCallback(debounce(_handleEntry, LOAD_DELAY_MS), []);

  const observerRef = useRef(null);

  const onIntersect = useCallback(
    (entries) => {
      handleEntry(entries[0]);
    },
    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      observerRef.current = new IntersectionObserver(onIntersect, options);

      observerRef.current.observe(container);

      return () => {
        observerRef.current.disconnect();
      };
    }
  }, [triggerRef, onIntersect, options]);

  return state;
};

export default YourComponent;
