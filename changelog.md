# Changelog <!-- markdownlint-disable MD041 MD025 -->

## v1.1.0

Features:

- Print.html will autoclose after printing or print cancellation.
- Operation.html now shows the changelog.

Notes:

- This version adds the large files showdown.js (md/html converter) and jQuery.js. They make the file size significantly larger.

# v1.0.0

First release.

Features:

- Extension will print score as-loaded, with no branding and with any number of parts.
- Teardrop is removed from score before printing.
- Extensoin print button is highlighted.
- Extension will warn if it doesn't think score is completely loaded. (This test is based of of whether it finds a `.barline` element with more than one child.)

Known bugs:

- If you click print, then press instruments, then press print again, there are two buttons. This should not occur within normal usage, and clicking away from the button then clicking back produces only one button.
