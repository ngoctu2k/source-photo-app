import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import PhotoApi from "../../aip/photoApi";

export const searchAsyncThunk = createAsyncThunk(
  "photo/search",
  async (params) => {
    const respon = await PhotoApi.search(params.page, params.title);
    return respon;
  }
);
export const ScrollAsyncThunk = createAsyncThunk(
  "photo/scroll",
  async (params) => {
    const respon = await PhotoApi.search(params.page, params.title);
    return respon;
  }
);
export const AddAsyncThunk = createAsyncThunk(
  "photo/add",
  async (params) => {
    const respon = await PhotoApi.post(params);
    return respon;
  }
);
export const GetAsyncThunk = createAsyncThunk(
  "photo/get",
  async (params) => {
    const respon = await PhotoApi.get(params);
    return respon;
  }
);
export const EditAsyncThunk = createAsyncThunk(
  "photo/edit",
  async (params,thunkAPI) => {
    const respon = await PhotoApi.edit(params);
    return respon;
  }
);
export const RemoveAsyncThunk = createAsyncThunk(
  "photo/remove",
  async (params,thunkAPI) => {
    const respon = await PhotoApi.remove(params);
    return params;
  }
);
const todoSlice = createSlice({
  name: "photo",
  initialState: {
    data: [],
    pagination: {},
    key: "",
    currentpage: 1,
    totalPage:1,
    loading:false
  },
  reducers: {
    fetchdata(state, action) {
    },
    addPhoto(state, action) {
      toast.success("Thêm photo thành công")
    },
    editPhoto(state, action) {
    },
    removePhoto(state, action) {
    },
    searchPhoto(state, action) {},
  },
  extraReducers: {
    [searchAsyncThunk.fulfilled]: (state, action) => {
      const { data, pagination } = action.payload;
      const{_totalRows,_limit} =pagination
      state.data = [];
      state.data.push(...data);
      state.pagination = pagination;
      state.key = action.meta.arg?.title;
      state.currentpage = 1
      state.totalPage = Math.ceil(_totalRows / _limit)
    },
    [ScrollAsyncThunk.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.currentpage = state.currentpage + 1
      if (state.currentpage <= state.totalPage) {
       state.data.push(...data)
      }
    },
    //add
    [AddAsyncThunk.pending]: (state, action) => {
      state.loading = true
    },
    [AddAsyncThunk.fulfilled]: (state, action) => {
      state.loading = false
      toast.success("Thêm photo thành công")
    },
    [AddAsyncThunk.rejected]: (state, action) => {
      state.loading = false
      toast.error("Thêm photo thất bại")
    },
    //
    [GetAsyncThunk.fulfilled]: (state, action) => {
    },
    //edit
    [EditAsyncThunk.pending]: (state, action) => {
      state.loading = true
    },
    [EditAsyncThunk.fulfilled]: (state, action) => {
      state.loading = false
      toast.success("Sửa photo thành công")
    },
    [EditAsyncThunk.rejected]: (state, action) => {
      state.loading = false
      toast.error("Thêm photo thất bại")
    },
    //remove
    [RemoveAsyncThunk.pending]: (state, action) => {
    },
    [RemoveAsyncThunk.fulfilled]: (state, action) => {
      const removePhotoId = action.payload;
      const index = state.data.findIndex(x=>x.id == removePhotoId)
      if (index > -1) {
        state.data.splice(index, 1);
      }
      toast.success("Xóa photo thành công")
    },
    [RemoveAsyncThunk.rejected]: (state, action) => {
      toast.error("Xóa thất bại")
    },
  },
});

const { actions, reducer } = todoSlice;
export const {
  addPhoto,
  editPhoto,
  removePhoto,
  fetchdata,
  searchPhoto,
} = actions;
export default reducer;
