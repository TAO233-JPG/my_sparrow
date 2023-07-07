import createBand from "./band";

export default function createPoint(option) {
  return createBand({ ...option, padding: 1 });
}
