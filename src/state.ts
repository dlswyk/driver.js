import { StageDefinition } from "./stage";
import { PopoverDOM } from "./popover";
import { DriveStep } from "./driver";

export type State = {
  isInitialized?: boolean;

  activeIndex?: number;
  activeElement?: Element;
  activeStep?: DriveStep;

  previousElement?: Element;
  previousStep?: DriveStep;

  popover?: PopoverDOM;

  __resizeTimeout?: number;
  __transitionCallback?: () => void;
  __activeStagePosition?: StageDefinition;
  __stageSvg?: SVGSVGElement;
};

let currentState: State = {};

export function setState<K extends keyof State>(key: K, value: State[K]) {
  currentState[key] = value;
}

export function getState(): State;
export function getState<K extends keyof State>(key: K): State[K];
export function getState<K extends keyof State>(key?: K) {
  return key ? currentState[key] : currentState;
}

export function resetState() {
  currentState = {};
}
