import request from "@/utils/request";

const requestApi = [
  { name: "getListNoPage", url: "/vue-admin-template/table/getListNoPage" },
  {}
];

export function getListNoPage(params) {
  return request({
    url: "/vue-admin-template/table/getListNoPage",
    method: "get",
    params
  });
}

export function getListPage(params) {
  return request({
    url: "/vue-admin-template/table/getListPage",
    method: "get",
    params
  });
}
