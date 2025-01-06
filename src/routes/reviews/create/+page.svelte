<script>
    let { form } = $props();
</script>

<a href="/reviews">Back</a>
<h1>Add a Review</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="book-name" class="form-label">Book Name</label>
    <input
      id="book-name"
      name="book name" 
      class="form-control"
      type="text"
      required
    />
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">Review Title</label>
    <input
      id="title"
      name="title" 
      class="form-control"
      type="text"
      required
    />
  </div>
  <div class="mb-3">
    <label for="reviewer" class="form-label">Reviewer</label>
    <input
      id="reviewer"
      name="reviewer" 
      class="form-control"
      type="text"
      required
    />
  </div>
  <div class="mb-3">
    <label for="rating" class="form-label">Rating</label>
    <input
      id="rating"
      name="reviewer rating"
      type="number"
      min="1"
      max="5"
      step="0.1"
      required
    />
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <textarea
      id="description"
      name="reviewer description" 
      class="form-control"
      rows="4"
      required
    ></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Add Review</button>
</form>

{#if form?.success}
  <p class="text-success">Review created successfully!</p>
{/if}
