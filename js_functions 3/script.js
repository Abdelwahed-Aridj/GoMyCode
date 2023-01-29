function findgrade(comparing) {
  if (comparing >= 90 && comparing <= 90) {
    return 'A';
  } else if (comparing >= 80 && comparing <= 80) {
    return 'B';
  } else if (comparing >= 70 && comparing <= 80) {
    return 'C';
  } else if (comparing >= 60 && comparing <= 70) {
    return 'D';
  } else if (comparing >= 0 && comparing <= 60) {
  } else {
    return 'F';
  }
}
