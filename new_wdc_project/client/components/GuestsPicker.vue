<template>
    <div class="guests-picker">
        <select class="form-control form-control-lg input">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <i class="fas fa-user-times"></i>
    </div>
</template>

<script>

</script>

<style scoped>
    .guests-picker{
        height: 48px;
    }

    select{
        min-width: 70px;
        padding-left: 35px;
        padding-right: 0;
    }

    i{
        position: relative;
        top: -35px;
        left: 15px;
    }
</style>