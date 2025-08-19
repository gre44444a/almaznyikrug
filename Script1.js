const coords = "52.756639,55.785756";
const name = "Алмазный круг";

const link = document.getElementById("map-link");

if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    link.href = `geo:${coords}?q=${coords}(${encodeURIComponent(name)})`;
} else {
    link.href = `https://maps.google.com/?q=${coords}`;
}