defmodule AppzWeb.PageController do
  use AppzWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
