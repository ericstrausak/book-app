<script>
    let { data } = $props(); // Data containing the list of reviews
  </script>
  
  <h1>List of Reviews</h1>
  <a href="/reviews/create">+ Add Review</a>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Book Name</th>
        <th>Review Title</th>
        <th>Reviewer</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each data.reviews as review}
        <tr>
          <td>
            <a href={"/reviews/" + review._id}>
              {review._id}
            </a>
          </td>
          <td>
            {review["book name"]}
          </td>
          <td>
            {review["review title"]}
          </td>
          <td>
            {review.reviewer}
          </td>
          <td>
            <form method="POST" action="?/delete">
                <input type="hidden" name="_id" value={review._id} />
              <button class="btn btn-danger">X</button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  