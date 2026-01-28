<template>
    <div class="container mt-5">
        <h2 class="mb-4">Top sách bán chạy</h2>
        <div class="row">
            <div class="col-sm-4 mb-4" v-for="(product, index) in products" :key="index">
                <div class="card h-100">
                    <img :src="product.image" class="card-img-top" :alt="product.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ product.price }} VNĐ</h6>
                        <button @click="toggleDetails(index)" class="btn btn-info">
                            {{ showDetails[index] ? "Ẩn chi tiết" : "Xem chi tiết" }}
                        </button>
                        <p v-show="showDetails[index]" class="card-text mt-2">{{ product.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const products = ref([
    {
        name: "Vợ Nhặt",
        image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg",
        description: "Tác phẩm 'Vợ Nhặt' của tác giả Kim Lân (1921-2007)...",
        price: 55000,
    },
    {
        name: "Chí Phèo",
        image: "https://cdn0.fahasa.com/media/catalog/product/c/h/chi-pheo-2017.jpg",
        description: "Tác phẩm kiệt xuất của Nam Cao viết về bi kịch của người nông dân bị tha hóa và khát vọng lương thiện trong xã hội cũ.",
        price: 45000,
    },
    {
        name: "Số Đỏ",
        image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935236406734.jpg",
        description: "Tiểu thuyết trào phúng bậc nhất của Vũ Trọng Phụng, phê phán sự lố lăng của xã hội thành thị Việt Nam những năm 1930.",
        price: 68000,
    },
    {
        name: "Tắt Đèn",
        image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_29005.jpg",
        description: "Tác phẩm tiêu biểu của Ngô Tất Tố, khắc họa chân thực nỗi khổ của người nông dân dưới ách sưu thuế nặng nề.",
        price: 52000,
    },
    {
        name: "Dế Mèn Phiêu Lưu Ký",
        image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8935244842425.jpg",
        description: "Tác phẩm dành cho thiếu nhi nổi tiếng nhất của Tô Hoài, kể về những chuyến phiêu lưu đầy bài học của chú Dế Mèn.",
        price: 75000,
    },
    {
        name: "Lão Hạc",
        image: "https://cdn0.fahasa.com/media/catalog/product/l/a/lao-hac_1.jpg",
        description: "Truyện ngắn đầy xúc động của Nam Cao về lòng tự trọng và tình phụ tử thiêng liêng của một người nông dân nghèo.",
        price: 35000,
    },
    {
        name: "Đất Rừng Phương Nam",
        image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786042086042.jpg",
        description: "Tiểu thuyết của Đoàn Giỏi về vùng đất Nam Bộ trù phú và tinh thần kháng chiến quật cường của con người nơi đây.",
        price: 89000,
    },
    {
        name: "Mắt Biếc",
        image: "https://cdn0.fahasa.com/media/catalog/product/m/a/mat-biec-bia-mem-2019_1_1_1.jpg",
        description: "Một trong những tác phẩm tiêu biểu nhất của Nguyễn Nhật Ánh về tình yêu đơn phương trong sáng và đầy nuối tiếc.",
        price: 95000,
    },
    {
        name: "Chiếc Thuyền Ngoài Xa",
        image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_83246.jpg",
        description: "Truyện ngắn của Nguyễn Minh Châu suy ngẫm về mối quan hệ giữa nghệ thuật và hiện thực đời sống đầy nghịch lý.",
        price: 40000,
    },
    {
        name: "Lặng Lẽ Sa Pa",
        image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_43076.jpg",
        description: "Tác phẩm của Nguyễn Thành Long ngợi ca những con người lao động thầm lặng, cống hiến hết mình cho đất nước.",
        price: 42000,
    },
    {
        name: "Nỗi Buồn Chiến Tranh",
        image: "https://cdn0.fahasa.com/media/catalog/product/8/9/8934974103516.jpg",
        description: "Tiểu thuyết của Bảo Ninh mang cái nhìn nhân văn và ám ảnh về những mất mát, tổn thương sau cuộc chiến.",
        price: 110000,
    }
]);
// Trạng thái hiển thị chi tiết cho từng cuốn sách
const showDetails = ref(products.value.map(() => false));
// Phương thức để ẩn/hiển thị chi tiết sách
const toggleDetails = (index) => {
    showDetails.value[index] = !showDetails.value[index];
};
</script>