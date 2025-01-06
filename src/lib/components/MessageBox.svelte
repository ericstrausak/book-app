<script>
    let { message="No message provided", name } = $props();
</script>

<div>
    <p>Your message:</p>
    <p>{message}</p>
    <p>{name}</p>
</div>

<style>
    div {
        border: 1px solid black;
        margin-bottom: 10px;
    }
</style>