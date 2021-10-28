<template>
  <transition name="chatAnimate">
    <div class="chat" v-if="show">
      <div class="chat__header">Помощь online</div>
      <div class="chat__content">
        <div class="chat__info" v-if="users.length">
          <div v-for="user in users" :key="user.id">
            <strong> {{ user.username }}</strong> вошел в чат
          </div>
        </div>

        <div class="chat__messages" v-if="messages.length">
          <div class="chat__messages-name"></div>
          <div
            class="messages__item"
            v-for="message in messages"
            :key="message.id"
          >
            <div
              class="messages__balloon"
              :class="{ left: message.userId !== currentUser.id }"
            >
              <div class="name">{{ message.username }}</div>
              <div class="text">{{ message.message }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="chat__footer">
        <form class="chat__form" v-if="!connected" @submit.prevent="connect">
          <div class="chat__send">
            <input
              type="text"
              placeholder="Представтесь"
              v-model="userName"
              v-focus
            />
            <button class="chat__send-btn" v-if="userName.length">
              <i class="icon-arrow-right"></i>
            </button>
          </div>
        </form>

        <form class="chat__form" v-if="connected" @submit.prevent="sendMessage">
          <div class="chat__send">
            <textarea
              placeholder="Введите текст"
              v-model="userMessage"
              @keypress.enter.prevent="sendMessage"
              v-focus
            ></textarea>
            <button class="chat__send-btn" v-if="userMessage">
              <i class="icon-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ChatWindow",
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      userName: "",
      userMessage: "",
      messages: [],
      users: [],
      currentUser: null,
      connected: false,
      socket: {},
      setConnected: false,
    };
  },
  methods: {
    sendMessage() {
      const message = {
        event: "message",
        username: this.userName,
        message: this.userMessage,
        id: Date.now(),
        userId: this.currentUser.id,
      };
      this.socket.current.send(JSON.stringify(message));
      this.userMessage = "";
    },

    connect() {
      this.socket.current = new WebSocket(
        process.env.VUE_APP_URL_WS + "/support"
      );
      this.socket.current.onopen = () => {
        this.connected = true;
        this.setConnected = true;
        const message = {
          event: "connection",
          username: this.userName,
          id: Date.now(),
        };
        this.socket.current.send(JSON.stringify(message));
      };
      this.socket.current.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.event === "connection") {
          this.users = [...this.users, message];
          if (!this.currentUser) this.currentUser = message;
        }
        if (message.event === "message") {
          this.messages = [...this.messages, message];
        }
      };
      this.socket.current.onclose = () => {
        this.connected = false;
        this.messages = [];
        console.log("Socket  закрит");
      };
      this.socket.current.onerror = (e) => {
        console.log("Socket виникла помилка ", e);
      };
    },
  },

  watch: {
    users(val) {
      if (val.length) {
        setTimeout(() => {
          this.users.shift();
        }, 5000);
      }
    },

    messages(val) {
      console.log(this.currentUser);
      console.log(val);
    },
  },
};
</script>

<style scoped lang="scss">
.chat {
  position: fixed;
  z-index: 900;
  bottom: 85px;
  right: 15px;
  width: 360px;
  letter-spacing: 0;
  border-radius: $border-r;
  overflow: hidden;
  &__header {
    padding: $padding-default;
    background: $green-500;
  }
  &__content {
    height: 190px;
    padding: $padding-default;
    font-size: 0.9rem;
    color: $text-dark;
    background: #ffffff;
    @include pretty-scroll();
  }
  &__footer {
    border-top: $green-500;
    box-shadow: rgb(0 0 0 / 13%) 0px -0.5px 0px 0px,
      rgb(0 0 0 / 2%) 0px -3px 5px 0px;
  }
  &__info {
    margin-bottom: 10px;
  }
  &__send {
    position: relative;
    &-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 35px;
      height: 100%;
      background: none;
      outline: none;
      font-size: 12px;
      line-height: 1;
      color: $text-dark;
      border: 0;
      border-radius: $border-r;
      &:hover {
        background: $dark-100;
      }
    }
    input,
    textarea {
      display: block;
      width: 100%;
      padding: 10px $padding-default;
      border: 0;
      outline: none;
      resize: none;
      background: $dark-50;
    }
    textarea {
      @include pretty-scroll();
    }
  }

  .messages {
    &__balloon {
      width: 80%;
      &.left {
        margin-left: auto;
        .text {
          background-color: $dark-300;
        }
      }
      .name {
        font-size: 0.9em;
        line-height: 1.5;
        color: $text-grey;
      }
      .text {
        min-height: 40px;
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        padding: 10px;
        color: $white;
        background: $dark-tiles-07;
        border-radius: $border-r;
      }
    }
  }
}

.chatAnimate-enter-active {
  transition: all 0.3s ease-out;
}
.chatAnimate-leave-active {
  transition: all 0.3s ease-out;
}
.chatAnimate-enter-from,
.chatAnimate-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
