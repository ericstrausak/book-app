<script>
    
    let { children } = $props();
</script>

<nav
    class="navbar navbar-expand-lg bg-dark bs-gradient bs-danger svelte-1subzap"
    data-bs-theme="dark"
>
    <a
        class="navbar-brand fw-bold text-white d-flex align-items-center svelte-1subzap"
        href="/"
        ><img
            src="/images/book.png"
            alt="BestBookReviews Logo"
            class="me-2 logo svelte-1subzap"
        />
        <span>My<span class="vault-highlight">Book</span>Reviews</span></a
    >
    <button
        class="navbar-toggler svelte-1subzap"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Navigation umschalten"
    ><span class="navbar-toggler-icon"></span>
    </button> <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active svelte-1subzap" href="/books"
                    >Books</a
                ></li>
                <button
        class="navbar-toggler svelte-1subzap"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Navigation umschalten"
    ><span class="navbar-toggler-icon"></span>
    </button> <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active svelte-1subzap" href="/reviews"
                    >Reviews</a
                ></li>
</nav>

<div class="container mt-3 svelte-1subzap">
    {@render children()}
</div>

<footer class="custom-footer svelte-1subzap">
    <div class="container svelte-1subzap">
        <div class="footer-grid">
            <div class="footer-section">
                <h5>MyBookReviews</h5>
                <p>
                    Our goal is to enlighten our users on the best books according to their own taste.
                </p>
                <p>
                    <a
                        href="mailto:contact@mybookreviews.com"
                        class="footer-link svelte-1subzap">Contact us</a
                    >
                </p>
            </div>
            <div class="footer-section">
                <h5>Explore</h5>
                <ul class="footer-links">
                    <li>
                        <a href="/topbooks" class="svelte-1subzap">Best Reads</a
                        >
                    </li>
                    <li>
                        <a href="/mybookdb" class="svelte-1subzap"
                            >Make your own reviews!</a
                        >
                    </li>
                    <li>
                        <a href="/mybookdb/all" class="svelte-1subzap"
                            >Your reviews</a
                        >
                    </li>
                    <li><a href="/legal" class="svelte-1subzap">Legal</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h5>Follow Us</h5>
                <div class="social-icons svelte-1subzap"></div>
            </div>
        </div>
        <p class="footer-slogan">
            Join us and the other 10'000 dedicated readers on our platform to
            improve everyones writing experience!
        </p>
        <p class="footer-text">
            © 2024 MyBookReviews. Was made to revive the thrill of reading. All
            rights reserved.
        </p>
    </div>
</footer>
