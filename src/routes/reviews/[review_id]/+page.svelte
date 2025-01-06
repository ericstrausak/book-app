<script>
    let { data, form } = $props();
</script>

<h1>Review (ID: {data.review._id})</h1>
<a href="/reviews">Back</a>

<form class="mt-3" method="POST" action="?/update">
  <input type="hidden" name="_id" value={data.review._id} />

  <div class="mb-3">
    <label class="form-label">Book Name</label>
    <input
      name="book name"
      bind:value={data.review["book name"]}
      class="form-control"
      type="text"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Review Title</label>
    <input
      name="title"
      bind:value={data.review.title}
      class="form-control"
      type="text"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Reviewer</label>
    <input
      name="reviewer"
      bind:value={data.review.reviewer}
      class="form-control"
      type="text"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Reviewer Rating</label>
    <input
      name="reviewer rating"
      bind:value={data.review["reviewer rating"]}
      class="form-control"
      type="number"
      step="0.1"
      min="0"
      max="5"
    />
  </div>

  <div class="mb-3">
    <label class="form-label">Review Description</label>
    <textarea
      name="reviewer description"
      bind:value={data.review["review description"]}
      class="form-control"
      rows="5"
    ></textarea>
  </div>

  <button class="btn btn-primary">Save</button>
</form>

{#if form?.success}
  <p class="text-success">Review updated successfully!</p>
{/if}
