if (document.body.contentEditable) {
      document.body.contentEditable = false;
      document.designMode = 'off';
} else {
      document.body.contentEditable = true;
      document.designMode = 'on';
}
