<template>
<div>
    <table>
        <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
                <th>분야</th>
                <th>성별</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(product,i) in productList">
                <td>{{product.product_name}}</td>
                <td>{{product.product_price}}</td>
                <td>{{product.product_category}}</td>
                <td>{{product.product_delivery_price}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>

export default {
  data () {
    return {
      productList: [
        {
          product_name: '현민', product_price: '30대', product_category: '하군', product_delivery_price: '남자'
        },
        {
          product_name: '수빈', product_price: '30대', product_category: '하군', product_delivery_price: '여자'
        },
        {
          product_name: '수진', product_price: '30대', product_category: '하군', product_delivery_price: '여자'
        },
        {
          product_name: '다희', product_price: '20대', product_category: '하군', product_delivery_price: '여자'
        }
      ]
    }
  }
}
</script>
<style scoped>
    table {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: center;
        pad: 8px;
    }
</style>
