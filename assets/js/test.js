// at least 100 px are a swipe
// you can use the value relative to screen size: window.innerWidth * .1
const offset = 100;
let xDown, yDown;

window.addEventListener('touchstart', e => {
  const firstTouch = getTouch(e);

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
});

window.addEventListener('touchend', e => {
  if (!xDown || !yDown) {
    return;
  }

  const {
    clientX: xUp,
    clientY: yUp
  } = getTouch(e);
  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;
  const xDiffAbs = Math.abs(xDown - xUp);
  const yDiffAbs = Math.abs(yDown - yUp);

  // at least <offset> are a swipe
  if (Math.max(xDiffAbs, yDiffAbs) < offset ) {
    return;
  }

  if (xDiffAbs > yDiffAbs) {
    if ( xDiff > 0 ) {
      alert('left');
    } else {
      alert('right');
    }
  } else {
    if ( yDiff > 0 ) {
      alert('up');
    } else {
      alert('down');
    }
  }
});

function getTouch (e) {
  return e.changedTouches[0]
}