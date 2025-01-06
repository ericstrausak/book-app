<script>
  let { data, form } = $props();
</script>

<h1>Book Details (ID: {data.book._id})</h1>
<a href="/books">Back</a>

<form class="mt-3" method="POST" action="?/update">
  <input type="hidden" name="_id" value={data.book._id} />

  <div class="mb-3">
    <label class="form-label">Rank</label>
    <input
      name="rank"
      bind:value={data.book.Rank}
      class="form-control"
      type="number"
      min="1"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Book Title</label>
    <input
      name="book title"
      bind:value={data.book["book title"]}
      class="form-control"
      type="text"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Rating</label>
    <input
      name="rating"
      bind:value={data.book.rating}
      class="form-control"
      type="number"
      step="0.1"
      min="0"
      max="5"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Author</label>
    <input
      name="author"
      bind:value={data.book.author}
      class="form-control"
      type="text"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Year of Publication</label>
    <input
      name="year of publication"
      bind:value={data.book["year of publication"]}
      class="form-control"
      type="number"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Genre</label>
    <input
      name="genre"
      bind:value={data.book.genre}
      class="form-control"
      type="text"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">URL</label>
    <input
      name="url"
      bind:value={data.book.url}
      class="form-control"
      type="url"
    />
  </div>

  <button class="btn btn-primary">Save</button>
</form>

{#if form?.success}
  <p class="text-success">Book updated successfully!</p>
{/if}
