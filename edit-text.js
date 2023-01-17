if (edit) {
      edit = false;
      document.body.contentEditable = false;
      document.designMode = 'off';
    } else {
      edit = true;
      document.body.contentEditable = true;
      document.designMode = 'on';
    }
