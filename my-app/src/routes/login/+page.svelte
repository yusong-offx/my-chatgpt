<script>
  import test from "$lib/assets/test.jpg";
</script>

<!-- <img src={test} alt="test" /> -->
<div class="login_background">
  <div class="login_input_container">
    <label for="id"><input id="id" /></label>
    <label for="password"><input id="password" /></label>
  </div>
</div>

<style>
  .login_background {
    background-image: url("$lib/assets/login_background_img.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login_input_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin: 0.1rem;
  }

  label {
    margin: 0.1rem;
  }

  input {
    width: 20rem;
    height: 2rem;
  }
</style>
