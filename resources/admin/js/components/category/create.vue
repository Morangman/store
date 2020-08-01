<template>
    <category-form
        :model.sync="model"
        :errors.sync="errors"
        @submit="store"
    >
    </category-form>
</template>

<script>
    import CategoryFormComponent from './form';
    import FormHelper from '../../mixins/form_helper';

    export default {
        components: {
            CategoryForm: CategoryFormComponent,
        },

        mixins: [FormHelper],

        data() {
            return {
                model: {
                    name: null,
                    price: null,
                    products: null,
                },
                errors: {},
                formData: null,
            };
        },

        methods: {
            store(data) {
                this.errors = {};
                this.formData = new FormData();
                this.collectFormData(data);

                axios.post(
                    Router.route('admin.category.store'),
                    this.formData,
                ).then(() => {
                    location.href = Router.route('admin.category.index');
                }).catch(({ response: { data: { errors } } }) => {
                    this.errors = errors;
                    this.scrollToError();
                });
            },
        },
    };
</script>
