const malicious = () => {
  function initBootstrapFileInput(previewImageUrl) {
    let options = {
      showUpload: false,
      autoOrientImage: true,
      previewFileType: 'image',
      allowedFileTypes: ['image'],
      browseClass: 'btn btn-success',
      removeClass: 'btn btn-danger',
      removeIcon: '<i class="fa fa-trash"></i>',
      browseIcon: '<i class="fa fa-picture-o"></i>'
    }

    if (previewImageUrl) {
      options.initialPreview = `<img src="${previewImageUrl}" />`;
    }

    $('.file-image').fileinput(options);
  }

  $('.remote-image-url').on('change', function() {
    $('.file-image').fileinput('destroy');
    initBootstrapFileInput($(this).val());
  });

  $('.notify').slideDown(500).delay(5000).slideUp(300);

  initBootstrapFileInput();
}

export default malicious;
