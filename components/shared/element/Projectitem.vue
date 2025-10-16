<script lang="ts" setup>
interface IProjectitemProps {
customer: string;
worksType: string;
image: string
};

const {
customer,
worksType,
image
} = defineProps<IProjectitemProps>();
</script>
