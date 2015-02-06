PDFTk
=====

Server-side Meteor wrapper for PDFtk, the [PDF toolkit](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/), a tool for manipulating PDF documents.

From the [pdftk man page](http://linux.die.net/man/1/pdftk):

> If PDF is electronic paper, then pdftk is an electronic stapler-remover, hole-punch, binder, secret-decoder-ring, and X-Ray-glasses. Pdftk is a simple tool for doing everyday things with PDF documents. Keep one in the top drawer of your desktop and use it to:

* Merge PDF Documents or Collate PDF Page Scans
* Split PDF Pages into a New Document
* Rotate PDF Documents or Pages
* Decrypt Input as Necessary (Password Required)
* Encrypt Output as Desired
* Fill PDF Forms with X/FDF Data and/or Flatten Forms
* Generate FDF Data Stencils from PDF Forms
* Apply a Background Watermark or a Foreground Stamp
* Report PDF Metrics such as Metadata and Bookmarks
* Update PDF Metadata
* Attach Files to PDF Pages or the PDF Document
* Unpack PDF Attachments
* Burst a PDF Document into Single Pages
* Uncompress and Re-Compress Page Streams
* Repair Corrupted PDF (Where Possible)

## Requirement
You need to have pdftk command line on your environment

## Quick Start
1. `npm install -g meteorite` (if not already installed)
2. `mrt add pdftk`
3. `apt-get install pdftk` (on linux, please to adapt to your environment)
4. Exemple: 
```js
PDFTK.stamp('.../sample.pdf',
			'.../pdfStamp.pdf',
			'.../result.pdf',
			function (err, buffer) {
				if (err)
					console.log(err);
			});
```

## Command options wrapped
List of actual wrappers:
* stamp
* multistamp

More options wrappers soon.
Come on help us with a PR !


## Documentation
You can find informations about PDFTk command line here:
* Web site: http://www.pdflabs.com/
* Ubuntu man page: http://manpages.ubuntu.com/manpages/lucid/man1/pdftk.1.html
* Ubuntu how to tutorial: http://www.ubuntuhowtos.com/howtos/merge_pdf_files (more commands at the end)
* UbuntuFr help page (fr): http://doc.ubuntu-fr.org/pdftk

## Contributing
Contributors are very welcome. There are many things you can help with,
including adding testing feature, creating examples for the examples folder...
Some guidelines below:

* **Questions**: It's okay to ask a question on Github Issues if you're
	having trouble since the volume is manageable. Just prefix your Github Issue with
	'Question: ' so we can differentiate easily. Also, please make sure you've read through
	PDFTk documentation and tried a few things before asking. This way you can be very
	specific in your question. Also, please provide a cloneable Github repository
	if the issue is complex. For more complex questions sometimes it's hard to get all of the context
	required to solve a problem by just looking at text.

* **New Features**: If you'd like to work on a feature for the PDFTk wrapper,
  start by creating a 'Feature Design: Title' issue. This will let people bat it
  around a bit before you send a full blown pull request. Also, you can create
  an issue to discuss a design even if you won't be working on it. Any
  collaboration is good! But please be patient :-).

* **Answer Questions!**: If you can help another user please do!

## TODO
1. Add testing
2. Wrap more options

## License
MIT
