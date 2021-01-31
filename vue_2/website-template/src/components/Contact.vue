<template>
    <div id="contact">
        <div id="address" >
            <div class="contact-info">
                <img src="../assets/home.png" alt="home" width="25" height="25"/>
                <span>Address</span>
                <div class="info">New York,NY 10012,US</div>
            </div>
            <div class="contact-info">
                <img src="../assets/email.png" alt="email" width="25" height="25"/>
                <span>Let's Talk</span>
                <div style="color: lightgreen" class="info">info@example.com</div>
            </div>
            <div class="contact-info">
                <img src="../assets/phone.png" alt="phone" width="25" height="25"/>
                <span>General Support</span>
                <div style="color: lightgreen" class="info">+01 777 888 99</div>
            </div>
        </div>
        <div id="form">
            <h2>Send Us A Message</h2>
            <form @submit="sendMessage" id="message-form">
                <label for="first_name">TELL US YOUR EMAIL..</label>
                <div id="name1">
                <input v-model="first_name" type="text" placeholder="First name" name="first_name" id="first_name" required />
                <input v-model="last_name" type="text" placeholder="Last name" name="last_name" id="last_name" required/>
                </div>
                <label for="email">ENTER YOUR EMAIL</label><br />
                <input v-model="email" type="email" placeholder="Eg.example@email.com" name="email" id="email" required/><br />
                <label for="number">ENTER PHONE NUMBER</label><br />
                <input v-model="phone" name="number" placeholder="Eg.+1800 000000" id="number" required/><br />
                <label for="message">MESSAGE</label><br />
                <textarea v-model="message" placeholder="Write us a message" name="message" id="message"/>
                <br /><button type="submit" id="btn">SEND MESSAGE</button>
            </form>
            <div id="sent-message"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data(){
            return{
                first_name : '',
                last_name : '',
                email : '',
                phone:'',
                message:''
            }
        },
        methods:{
            sendMessage(e){
                e.preventDefault();
                document.getElementById('sent-message').innerHTML = `Thank You for messaging us ${this.first_name},Your Email (${this.email}) was sent to us successfully`;
                document.getElementById('message-form').reset();
                window.setTimeout(this.clearMessage,7000);

    },
            clearMessage(){
                document.getElementById('sent-message').innerHTML = ''
            }
        }
    }
</script>

<style scoped>

    #contact[data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0]{
        display: flex;
    }
    #address[data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0]{
        background: linear-gradient(to left,rgba(0,0,0,0.8),rgba(0,0,0,1)),url(/img/building.490e31a5.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        width:30%;
        height: 600px;
        color: white;
        padding: 150px 0 0 80px;
        margin: 20px 20px 20px 20%;
    }
    #address span[data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0]{
        font-weight: bold;
        margin-left: 30px;
    }
    #address .info[data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0]{
        margin:10px 0 50px 55px;
    }
    #form[data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0]{
        margin-top: 20px;
        width: 500px;
    }
    #form h2[data-v-cf6573c0][data-v-cf6573c0][data-v-cf6573c0]{
        margin-left: 100px;
        font-size: 1.6em;
        font-weight: bold;
    }
    #form label[data-v-cf6573c0][data-v-cf6573c0]{
        color: gray;
        font-size: 0.8em;
        font-weight: bold;
        margin-top: 20px;
    }
    #form input[data-v-cf6573c0][data-v-cf6573c0]{
        background: none;
        box-shadow: none;
        border: none;
        border: 1px solid rgba(0,0,0,0.2);
        padding: 10px;
        width:500px;
    }
    #name1 input[data-v-cf6573c0][data-v-cf6573c0]{
        width: 250px;
    }
    #form textarea[data-v-cf6573c0]{
        padding: 10px;
        width: 500px;
        resize: none;
    }
    #form button{
        margin: 60px 0 0 160px;
        background-color: #32CD32;
        color: white;
        font-weight: bold;
        padding: 4px 14px 4px 14px;
        border: none;

    }
    #sent-message{
        color: blue;
        font-weight: bold;
        margin-top:5px;
        margin-left: 20px;
    }
</style>
