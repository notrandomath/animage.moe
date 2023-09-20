<template>
    <div class="grid" v-for="member in member_data">
        <MemberCard :member="member"></MemberCard>
    </div>
</template>

<script>
import MEMBER_DATA from '../member_data.json';
export default{
    data(){
        return{
            member_data: MEMBER_DATA
        }
    }
}
</script>