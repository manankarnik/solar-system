<template>
  <section id="top">
    <h1 v-if="name === ''">Hey Anonymous, thank you for your feedback!</h1>
    <h1 v-else>Hey {{ name }}, thank you for your feedback!</h1>
    <div id="container">
      <form>
        <div>
          <label for="first-name-input">First Name</label>
          <input
            id="first-name-input"
            type="text"
            placeholder="First name"
            v-model="name"
          />
        </div>
        <div>
          <label for="last-name-input">Last Name</label>
          <input id="last-name-input" type="text" placeholder="Last name" />
        </div>
        <div>
          <label for="email-input"
            >Email<span style="color: orangered">*</span></label
          >
          <input id="email-input" type="email" placeholder="Email" required />
        </div>
        <div>
          <label for="feedback-input"
            >Feedback<span style="color: orangered">*</span></label
          >
          <textarea
            id="feedback-input"
            cols="40"
            rows="10"
            type="text"
            placeholder="Feedback (Thoughts/Suggestions/Complaints)"
            required
          />
        </div>
        <div id="flex-box">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>
@import "../styles/feedback.css";
</style>
