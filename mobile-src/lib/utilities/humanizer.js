Humanize.Date = {
  humanize: function(text, inFormat, outFormat) {
    if (text === '') return '';

    inFormat  = inFormat || "MM-DD-YYYY";
    outFormat = outFormat || "MMMM D, YYYY";
    return moment(text, inFormat).format(outFormat);
  },
};

Humanize.Time = {
  humanize: function(text, inFormat, outFormat) {
    if (text === '') return '';

    inFormat  = inFormat || "HH:mm";
    outFormat = outFormat || "h:mm A";
    return moment(text, inFormat).format(outFormat);
  }
};

// Alias

if ( typeof __ === "undefined" ) {
  __ = Humanize;
}
