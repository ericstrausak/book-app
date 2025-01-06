<script>
    let { data } = $props(); // Data containing the list of books
  </script>
  
  <h1>List of Books</h1>
  <a href="/books/create">+ Add Book</a>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Rank</th>
        <th>Book Title</th>
        <th>Rating</th>
        <th>Author</th>
        <th>Year of Publication</th>
        <th>Genre</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each data.books as book}
        <tr>
          <td>
            <a href={"/books/" + book._id}>
              {book._id}
            </a>
          </td>
          <td>{book.Rank}</td>
          <td>{book["book title"]}</td>
          <td>{book.rating}</td>
          <td>{book.author}</td>
          <td>{book["year of publication"]}</td>
          <td>{book.genre}</td>
          <td>
            <form method="POST" action="?/delete">
              <input type="hidden" name="_id" value={book._id} />
              <button class="btn btn-danger">X</button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  