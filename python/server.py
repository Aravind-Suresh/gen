#!/usr/bin/env python
"""
A simple, yet functional HTTP server in python

Usage:
    ./server.py [<port>]

"""
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import SocketServer,cgi
import sys

class S(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        self.wfile.write("<html><body><h1>hi!</h1></body></html>")

    def do_HEAD(self):
        self._set_headers()

    def do_POST(self):
        self._set_headers()
        ctype, pdict = cgi.parse_header(self.headers.getheader('content-type'))
        length = int(self.headers.getheader('content-length'))
        params = cgi.parse_qs(self.rfile.read(length), keep_blank_values=1)
        keys = params.keys()
        for key in keys:
            params[key] = params[key][0]
        # params contains the post data

def run(server_class=HTTPServer, handler_class=S, port=80):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print 'Starting httpd...'
    httpd.serve_forever()

if __name__ == "__main__":
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
