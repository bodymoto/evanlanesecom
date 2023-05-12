import os
import http.server
import socketserver

class SpaRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)

    def do_GET(self):
        if not os.path.exists(self.path[1:]):
            self.path = "/index.html"
        super().do_GET()

if __name__ == "__main__":
    PORT = 8000
    Handler = SpaRequestHandler

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving on port {PORT}")
        httpd.serve_forever()