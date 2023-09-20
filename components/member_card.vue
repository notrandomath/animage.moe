<template>
    <div class="card">
        {{ member.name }}
    </div>
</template>

<script>
export default {
  name: 'member_card',
  props: ['member'],
}
</script>