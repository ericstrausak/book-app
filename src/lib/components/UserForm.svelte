<script>
    let { user } = $props();
</script>

<div>
    <label for="">First</label>
    <input bind:value={user.first}  type="text" />
</div>
<div>
    <label for="">Last</label>
    <input bind:value={user.last} type="text" />
</div>
