<template>
<div>
    <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>카테고리</th>
                <th>배송료</th>
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
          product_name: '기계식키보드', product_price: 25000, product_category: '노트북/태블릿', product_delivery_price: 5000
        },
        {
          product_name: '기계식키보드', product_price: 25000, product_category: '노트북/태블릿', product_delivery_price: 5000
        },
        {
          product_name: '기계식키보드', product_price: 25000, product_category: '노트북/태블릿', product_delivery_price: 5000
        },
        {
          product_name: '기계식키보드', product_price: 25000, product_category: '노트북/태블릿', product_delivery_price: 5000
        },
        {
          product_name: '기계식키보드', product_price: 25000, product_category: '노트북/태블릿', product_delivery_price: 5000
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
