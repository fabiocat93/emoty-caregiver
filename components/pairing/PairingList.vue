<template>
  <div id="pairing-list-container">
    <Row>
      <Col span="8">
        <Container
          behaviour="drop-zone"
          :should-animate-drop="() => false"
          orientation="horizontal"
          group-name="1"
          :auto-scroll-enabled="false"
          :get-child-payload="getChildPayload2"
          @drop="onDrop('items2', $event)"
        >
          <div v-for="item in items2" :key="item.id" class="target">
            <img
              :src="item.data.img"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            <br />
            {{ item.data.name }}

            <Button
              v-if="items2[0].id !== -1"
              key="deleteButton2"
              type="primary"
              shape="circle"
              icon="md-close"
              @click="drop2"
            ></Button>
          </div>
        </Container>
      </Col>

      <Col span="8">
        <Container
          behaviour="drop-zone"
          :should-animate-drop="() => false"
          orientation="horizontal"
          group-name="1"
          :auto-scroll-enabled="false"
          :get-child-payload="getChildPayload3"
          @drop="onDrop('items3', $event)"
        >
          <div v-for="item in items3" :key="item.id" class="target">
            <img
              :src="item.data.img"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            <br />

            {{ item.data.name }}
            <Button
              v-if="items3[0].id !== -1"
              key="deleteButton3"
              @click="drop3"
              type="primary"
              shape="circle"
              icon="md-close"
            ></Button>
          </div>
        </Container>
      </Col>

      <Col span="8">
        <Container
          behaviour="drop-zone"
          :should-animate-drop="() => false"
          orientation="horizontal"
          group-name="1"
          :auto-scroll-enabled="false"
          :get-child-payload="getChildPayload4"
          @drop="onDrop('items4', $event)"
        >
          <div v-for="item in items4" :key="item.id" class="target">
            <img
              :src="item.data.img"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            <br />

            {{ item.data.name }}
            <Button
              v-if="items4[0].id !== -1"
              key="deleteButton4"
              @click="drop4"
              type="primary"
              shape="circle"
              icon="md-close"
            ></Button>
          </div>
        </Container>
      </Col>
    </Row>

    <br />
    <br />
    <br />

    <Row>
      <Container
        behaviour="copy"
        orientation="horizontal"
        group-name="1"
        :auto-scroll-enabled="false"
        :get-child-payload="getChildPayload1"
      >
        <Draggable v-for="item in items1" :key="item.id" class="item">
          <div class="draggable-item">
            <img
              :src="item.data.img"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            <br />

            {{ item.data.name }}
          </div>
        </Draggable>
      </Container>
    </Row>

    <p>{{ message }}</p>
  </div>
</template>

<script>
// https://github.com/kutlugsahin/vue-smooth-dnd
import { Container, Draggable } from 'vue-smooth-dnd'
import { server } from '../../mixins/server'

export default {
  components: { Container, Draggable },
  mixins: [server],
  data() {
    return {
      items1: [
        {
          data: { name: 'Gioia', img: require('~/assets/images/logo.png') },
          id: 1
        },
        {
          data: { name: 'Tristezza', img: require('~/assets/images/logo.png') },
          id: 2
        },
        {
          data: { name: 'Rabbia', img: require('~/assets/images/logo.png') },
          id: 3
        },
        {
          data: { name: 'Paura', img: require('~/assets/images/logo.png') },
          id: 4
        },
        {
          data: { name: 'Sorpresa', img: require('~/assets/images/logo.png') },
          id: 5
        },
        {
          data: { name: 'Disgusto', img: require('~/assets/images/logo.png') },
          id: 6
        },
        {
          data: {
            name: 'Neutralità',
            img: require('~/assets/images/logo.png')
          },
          id: 7
        }
      ],
      myItems2: [],
      myItems3: [],
      myItems4: [],
      message: '',
      requesting: false,
      fromRoute: null
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from
    })
  },
  computed: {
    items2: {
      get() {
        if (this.myItems2.length > 0) {
          return this.myItems2
        }

        return [
          {
            data: {
              name: 'Faccina 1',
              img: require('~/assets/images/logo.png')
            },
            id: -1
          }
        ]
      },
      set(value) {
        this.myItems2 = value
      }
    },
    items3: {
      get() {
        if (this.myItems3.length > 0) {
          return this.myItems3
        }
        return [
          {
            data: {
              name: 'Faccina 2',
              img: require('~/assets/images/logo.png')
            },
            id: -1
          }
        ]
      },
      set(value) {
        this.myItems3 = value
      }
    },
    items4: {
      get() {
        if (this.myItems4.length > 0) {
          return this.myItems4
        }
        return [
          {
            data: {
              name: 'Faccina 3',
              img: require('~/assets/images/logo.png')
            },
            id: -1
          }
        ]
      },
      set(value) {
        this.myItems4 = value
      }
    }
  },
  methods: {
    onDrop(collection, dropResult) {
      this[collection] = this.applyDrag(this[collection], dropResult)

      if (
        this.items2[0].id !== -1 &&
        this.items3[0].id !== -1 &&
        this.items4[0].id !== -1 &&
        !this.requesting
      ) {
        this.requesting = true
        const data = [this.items2[0].id, this.items3[0].id, this.items4[0].id]

        this.serverPair(data).then(
          (data) => {
            this.$store.dispatch('setSessionPaired', true).then(() => {
              this.message = ''
              this.requesting = false
              this.$Notice.success({
                title: 'Dispositivo accoppiato correttamente',
                desc: ''
              })
              if (!this.fromRoute) {
                this.$router.push('/')
              } else {
                this.$router.back()
              }
            })
          },
          (error) => {
            this.message =
              'Nessun dispositivo sta tentando di giocare con questa sequenza. Sei sicuro di aver inserito le faccine giuste?'
            this.requesting = false
            return false
          }
        )
      }
    },
    getChildPayload1(index) {
      return this.items1[index]
    },
    getChildPayload2(index) {
      return this.items2[index]
    },
    getChildPayload3(index) {
      return this.items3[index]
    },
    getChildPayload4(index) {
      return this.items4[index]
    },

    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult
      if (removedIndex === null && addedIndex === null) return arr

      const result = [...arr]
      let itemToAdd = payload

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (addedIndex !== null) {
        for (let i = 0; i < result.length; i++) {
          result.splice(i, 1)
        }
        result.splice(addedIndex, 0, itemToAdd)
      }

      return result
    },
    drop2() {
      if (this.items2.length > 0) {
        this.items2 = [
          {
            data: {
              name: 'Faccina 1',
              img: require('~/assets/images/logo.png')
            },
            id: -1
          }
        ]
      }
    },
    drop3() {
      if (this.items3.length > 0) {
        this.items3 = [
          {
            data: {
              name: 'Faccina 2',
              img: require('~/assets/images/logo.png')
            },
            id: -1
          }
        ]
      }
    },
    drop4() {
      if (this.items4.length > 0) {
        this.items4 = [
          {
            data: {
              name: 'Faccina 3',
              img: require('~/assets/images/logo.png')
            },
            id: -1
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.smooth-dnd-container {
  width: 100%;
}

.target {
  border: blue;
  border-style: dashed;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 3%;
  padding-bottom: 3%;

  margin: 2%;
}
</style>
