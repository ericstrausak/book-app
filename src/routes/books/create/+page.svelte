<script>
  let { form } = $props();
</script>

<a href="/books">Back</a>
<h1>Add a Book</h1>

<form method="POST" action="?/create">
<div class="mb-3">
  <label for="book-title" class="form-label">Book Title</label>
  <input
    id="book-title"
    name="book title" 
    class="form-control"
    type="text"
    required
  />
</div>
<div class="mb-3">
  <label for="rating" class="form-label">Rating</label>
  <input
    id="rating"
    name="rating"
    type="number"
    min="0"
    max="5"
    step="0.1"
    class="form-control"
    required
  />
</div>
<div class="mb-3">
  <label for="author" class="form-label">Author</label>
  <input
    id="author"
    name="author" 
    class="form-control"
    type="text"
    required
  />
</div>
<div class="mb-3">
  <label for="year-of-publication" class="form-label">Year of Publication</label>
  <input
    id="year-of-publication"
    name="year of publication"
    type="number"
    min="0"
    class="form-control"
    required
  />
</div>
<div class="mb-3">
  <label for="genre" class="form-label">Genre</label>
  <input
    id="genre"
    name="genre"
    class="form-control"
    type="text"
    required
  />
</div>
<div class="mb-3">
  <label for="url" class="form-label">URL</label>
  <input
    id="url"
    name="url"
    class="form-control"
    type="url"
    required
  />
</div>
<button type="submit" class="btn btn-primary">Add Book</button>
</form>

{#if form?.success}
<p class="text-success">Book created successfully!</p>
{/if}
