import { createSlice } from "@reduxjs/toolkit";
import productsData from "../data/CategoryDetailProduct";

const initialState = {
    items: productsData,
    activePage: 1,
    itemsPerPage: 12,
    filters: {
        price: [], // ["over5", "3to5", "under3"]
    },
};

const slice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        setPage(state, action) {
            const totalPages = Math.max(
                1,
                Math.ceil(state.items.length / state.itemsPerPage)
            );
            state.activePage = Math.min(Math.max(action.payload, 1), totalPages);
        },
        nextPage(state) {
            const totalPages = Math.max(
                1,
                Math.ceil(state.items.length / state.itemsPerPage)
            );
            if (state.activePage < totalPages) state.activePage += 1;
        },
        prevPage(state) {
            if (state.activePage > 1) state.activePage -= 1;
        },
        setItems(state, action) {
            state.items = action.payload;
            const totalPages = Math.max(
                1,
                Math.ceil(state.items.length / state.itemsPerPage)
            );
            if (state.activePage > totalPages) state.activePage = totalPages;
        },
        // ✅ 가격 필터 토글
        togglePriceFilter(state, action) {
            const value = action.payload;
            if (state.filters.price.includes(value)) {
                state.filters.price = state.filters.price.filter((v) => v !== value);
            } else {
                state.filters.price.push(value);
            }
            state.activePage = 1;
        },
    },
});

export const { setPage, nextPage, prevPage, setItems, togglePriceFilter } =
    slice.actions;

// 필터 적용된 상품
export const selectFilteredItems = (s) => {
    let result = s.catalog.items;
    if (s.catalog.filters.price.length > 0) {
        result = result.filter((item) => {
            const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
            return s.catalog.filters.price.some((filter) => {
                if (filter === "over5") return numericPrice >= 50000;
                if (filter === "3to5") return numericPrice >= 30000 && numericPrice < 50000;
                if (filter === "under3") return numericPrice < 30000;
                return true;
            });
        });
    }
    return result;
};

export const selectActivePage = (s) => s.catalog.activePage;
export const selectTotalPages = (s) => {
    const filtered = selectFilteredItems(s);
    return Math.max(1, Math.ceil(filtered.length / s.catalog.itemsPerPage));
};
export const selectCurrentItems = (s) => {
    const filtered = selectFilteredItems(s);
    const start = (s.catalog.activePage - 1) * s.catalog.itemsPerPage;
    return filtered.slice(start, start + s.catalog.itemsPerPage);
};

export default slice.reducer;
