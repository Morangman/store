<template>
    <div class="row">
        <div class="col-md-8">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Основне" active>
                        <strong>
                            <h1>{{ $t('admin.product.form.general') }}</h1>
                        </strong>
                        <div class="form-group">
                            <label>
                                <strong>{{ $t('admin.product.form.title') }}</strong>
                            </label>
                            <input
                                name="title"
                                type="text"
                                v-model="model.title"
                                class="form-control"
                                :class="{ 'border-danger': errors.title }"
                            >
                            <div v-for="(error, i) in errors.title"
                                 :key="`title__error__${i}`"
                                 class="text-danger error"
                            >
                                {{ error }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>
                                <strong>{{ $t('admin.product.form.category') }}</strong>
                            </label>
                            <select class="form-control" name="category" v-model="model.category_id" required>
                                <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                            </select>
                            <div v-for="(error, i) in errors.category_id"
                                 :key="`category_id__error__${i}`"
                                 class="text-danger error"
                            >
                                {{ error }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>
                                <strong>{{ $t('admin.product.form.general_info') }}</strong>
                            </label>
                            <textarea
                                name="title"
                                type="text"
                                rows="5"
                                v-model="model.general_info"
                                class="form-control"
                                :class="{ 'border-danger': errors.general_info }"
                            ></textarea>
                            <div v-for="(error, i) in errors.general_info"
                                 :key="`general_info__error__${i}`"
                                 class="text-danger error"
                            >
                                {{ error }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="price">
                                        <strong>{{ $t('admin.product.form.price') }}</strong>
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        v-model="model.price"
                                        class="form-control"
                                        :class="{ 'border-danger': errors.price }"
                                        id="price"
                                        placeholder=""
                                    >
                                    <div v-for="(error, i) in errors.price"
                                         :key="`price__error__${i}`"
                                         class="text-danger error"
                                    >
                                        {{ error }}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="old_price">
                                        <strong>{{ $t('admin.product.form.old_price') }}</strong>
                                    </label>
                                    <input
                                        type="text"
                                        name="old_price"
                                        v-model="model.old_price"
                                        class="form-control"
                                        :class="{ 'border-danger': errors.old_price }"
                                        id="old_price"
                                        placeholder=""
                                    >
                                    <div v-for="(error, i) in errors.old_price"
                                         :key="`old_price__error__${i}`"
                                         class="text-danger error"
                                    >
                                        {{ error }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>
                                <strong>{{ $t('admin.product.form.image') }}</strong>
                            </label>
                            <b-form-file
                                v-model="model.image"
                                class="mt-1"
                                accept=".png,.jpg,.jpeg,.gif"
                                @change="showProductPreviewImage"
                            ></b-form-file>
                            <img width="auto" height="100" class="center-image" v-if="previewImage" :src="previewImage">
                            <div v-for="(error, i) in errors.image"
                                 :key="`image__error__${i}`"
                                 class="text-danger error"
                            >
                                {{ error }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label>
                                <strong>{{ $t('admin.product.form.recommended_products') }}</strong>
                            </label>
                            <multiselect
                                v-model="model.recommended_products"
                                :options="recommended"
                                :multiple="true"
                                :close-on-select="true"
                                placeholder="Обрати товар"
                                label="title" track-by="title">
                            </multiselect>
                            <div v-for="(error, i) in errors.recommended_products"
                                 :key="`recommended_products__error__${i}`"
                                 class="text-danger error"
                            >
                                {{ error }}
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Кольори">
                        <strong>
                            <h1>{{ $t('admin.product.form.variations') }}</h1>
                        </strong>
                        <div class="form-group">
                            <div class="change-blocks-wrapper__item" v-for="(recommended, index) in model.variations">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="text-right">
                                            <a href="#" class="text-danger" v-on:click="deleteRecommended(index)">
                                                {{ $t('common.word.remove') }}
                                            </a>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label>
                                                        <strong>{{ $t('admin.product.form.variations_form.color_name') }}</strong>
                                                    </label>
                                                    <input
                                                        name="title"
                                                        v-model="recommended.color_name"
                                                        type="text"
                                                        class="form-control"
                                                    >
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>
                                                        <strong>{{ $t('admin.product.form.variations_form.color') }}</strong>
                                                    </label>
                                                    <v-swatches
                                                        v-model="recommended.color"
                                                        popover-x="left"
                                                        swatches="text-advanced"
                                                        show-fallback
                                                        fallback-input-type="color"
                                                    ></v-swatches>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>
                                                        <strong>{{ $t('admin.product.form.variations_form.price') }}</strong>
                                                    </label>
                                                    <input
                                                        name="title"
                                                        v-model="recommended.price"
                                                        type="text"
                                                        class="form-control"
                                                    >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>
                                                        <strong>{{ $t('admin.product.form.variations_form.old_price') }}</strong>
                                                    </label>
                                                    <input
                                                        name="title"
                                                        v-model="recommended.old_price"
                                                        type="text"
                                                        class="form-control"
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group mt-2">
                                                    <label>
                                                        <strong>{{ $t('admin.product.form.variations_form.image') }}</strong>
                                                    </label>
                                                    <b-form-file
                                                        class="mt-1"
                                                        v-model="recommended.image"
                                                        accept=".png,.jpg,.jpeg,.gif"
                                                        @change="showRecommendedPreviewImage"
                                                    ></b-form-file>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mt-3">
                                                <img width="auto" height="100" class="center-image" v-if="previewImages[index]" :src="previewImage[index]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right">
                                <button
                                    v-on:click="addRecommended"
                                    class="btn btn-primary margin-top-10"
                                >{{ $t('common.word.add') }}</button>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
        <div class="col-md-4">
            <h4>{{ $t('admin.product.form.seo') }}</h4>
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                        <label>
                            <strong>{{ $t('admin.product.form.seo_form.title') }}</strong>
                        </label>
                        <input
                            name="title"
                            type="text"
                            v-model="model.seo.title"
                            class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <label>
                            <strong>{{ $t('admin.product.form.seo_form.meta') }}</strong>
                        </label>
                        <input
                            name="title"
                            type="text"
                            v-model="model.seo.meta"
                            class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <label>
                            <strong>{{ $t('admin.product.form.seo_form.keywords') }}</strong>
                        </label>
                        <input
                            name="title"
                            type="text"
                            v-model="model.seo.keywords"
                            class="form-control"
                        >
                    </div>
                </div>
            </div>
            <div class="text-right">
                <template v-if="model.id">
                    <button
                        type="submit"
                        class="btn btn-danger"
                        @click.prevent="deleteProduct"
                    >
                        {{ $t('common.word.delete') }}
                    </button>
                </template>
                <button
                    type="submit"
                    class="btn btn-primary"
                    @click.prevent="submit"
                >
                    {{ $t('common.word.save') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import FormHelper from '../../mixins/form_helper';

    export default {
        props: {
            model: {
                type: Object,
                required: true,
            },
            categories: {
                type: Array,
                required: true,
            },
            recommended: {
                type: Array,
                required: true,
            },
            errors: {
                type: Object,
                required: true,
            },
        },

        mixins: [FormHelper],

        data() {
            return {
                previewImage: null,
                previewImages: [],
                productImages: [],
                color: '#000000',
            };
        },

        methods: {
            submit() {
                this.$emit('submit', this.model);
            },

            showProductPreviewImage(e) {
                const file = e.target.files[0];

                this.previewImage = URL.createObjectURL(file);
            },

            showRecommendedPreviewImage(e) {
                console.log(e);
                const file = e.target.files[0];

                this.previewImages[index] = URL.createObjectURL(file);
            },

            deleteProduct() {
                confirmation.delete(() => {
                    this.$emit('delete');
                });
            },

            addRecommended() {
                this.model.variations.push({
                    color_name: null,
                    color: '#000000',
                    price: null,
                    old_price: null,
                    image: null,
                });
            },

            deleteRecommended(index) {
                this.model.variations.splice(index, 1);
            },
        },

        created() {
            if (this.model.id) {
                this.previewImage = this.model.image;
            } else {
                this.model.variations.push({
                    color_name: null,
                    color: '#000000',
                    price: null,
                    old_price: null,
                    image: null,
                });
            }
        },
    };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
