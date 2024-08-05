import Link from "next/link";
import { Spotify } from "react-spotify-embed";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";

export default function ChapterPage() {
  return (
    <main className="container pt-20 lg:pt-30">
      <span className="py-4 opacity-50 text-base font-medium flex gap-1">
        <ArrowLeftFromLine />
        <Link href="/audiobooks">Audiobooks</Link> /
        <Link href="/audiobooks/storu">Story</Link> /
        <Link href="/audiobooks/storu">Story Chapter 1</Link>
      </span>

      <h1 className="text-3xl font-semibold text-center py-10 lg:text-4xl">
        01 - Storu
      </h1>

      <Spotify
        wide
        link="https://open.spotify.com/intl-id/track/5Ubdw4zuaR1urAgDiEHvfw?si=285c24abd2e74141"
      />

      <div className="flex py-4 justify-between items-center">
        <h2 className="text-xl font-semibold lg:text-2xl">Chapter 1</h2>

        <div className="space-x-2">
          <Link href="/audiobooks">
            <Button size="sm" variant="outline">
              Prev
            </Button>
          </Link>
          <Link href="/audiobooks">
            <Button size="sm">Next</Button>
          </Link>
        </div>
      </div>

      <div className="text-base lg:text-lg space-y-3">
        <p>
          Cha Joo-young terpaksa mendekam di sebuah pusat tahanan remaja setelah
          insiden tragis yang membuat ayahnya, seorang gangster terkenal, koma.
          Hatinya dipenuhi rasa bersalah dan kemarahan, namun nasib
          mempertemukannya dengan sebuah kejadian yang tidak terduga. Keberadaan
          Cha Joo-young di penjara bukanlah hal yang sederhana. Ia harus
          berhadapan dengan berbagai tantangan dan konflik, baik dari
          rekan-rekannya di penjara maupun dari dalam dirinya sendiri, yang
          selalu dihantui oleh rasa bersalah dan penyesalan. Meski begitu, ia
          tetap bertahan dengan harapan akan ada perubahan di masa depan.
        </p>
        <p>
          Suatu hari, ayahnya yang sempat dianggap tidak akan pernah sadar
          kembali, datang mengunjungi Cha Joo-young. Dalam suasana yang penuh
          ketegangan, ayahnya, dengan suara yang lemah dan penuh penyesalan,
          berkata, &quot;Nak, aku membunuh teman masa kecilmu.&quot; Kata-kata
          tersebut seperti menorehkan luka baru di hati Cha Joo-young dan
          menambah beban emosional yang sudah sangat berat. Ia merasa campur
          aduk antara kemarahan yang mendalam dan rasa kecewa yang meluap-luap.
        </p>
        <p>
          Tindakan ayahnya telah menghancurkan banyak hal dalam hidup Cha
          Joo-young. Namun, kata-kata itu juga memicu sebuah keputusan besar
          dalam dirinya. Rasa dendam dan keinginan untuk membalas perlakuan
          ayahnya mendorongnya untuk merencanakan sesuatu yang berani dan penuh
          risiko. Ia mulai merencanakan bagaimana cara untuk membalas dendam,
          bukan dengan cara biasa, tetapi dengan cara yang sangat ekstrem:
          mengambil alih kendali penjara tempatnya dipenjara. Ia menyadari bahwa
          hanya dengan menguasai penjara dan memperlihatkan kekuatannya, ia bisa
          mendapatkan kembali rasa kontrol dan keadilan yang selama ini hilang.
        </p>
        <p>
          Dengan tekad yang membara dan strategi yang matang, Cha Joo-young
          memulai rencana ambisiusnya untuk merubah nasib dan mendapatkan
          keadilan. Ia mulai membangun aliansi dengan beberapa penghuni penjara
          yang memiliki kepentingan sama dan memanfaatkan setiap kesempatan yang
          ada untuk meraih tujuannya. Satu persatu, ia menghadapi berbagai
          rintangan dan tantangan yang datang, baik dari dalam penjara maupun
          dari luar. Namun, semangatnya yang tak tergoyahkan dan kemampuannya
          dalam merancang strategi membuatnya terus maju dalam perjuangannya
          untuk menguasai penjara dan meraih keadilan yang selama ini dia
          impikan.
        </p>
        <p>
          Perjalanan Cha Joo-young penuh dengan intrik, pengkhianatan, dan
          momen-momen mendebarkan. Ia harus terus berjuang melawan berbagai
          ancaman dan mencoba mengatasi berbagai konflik internal yang timbul
          selama prosesnya. Meskipun ada banyak risiko dan kemungkinan
          kegagalan, tekad dan keberaniannya terus mendorongnya untuk melangkah
          maju. Dalam perjalanan panjangnya, Cha Joo-young akan menghadapi
          banyak hal yang akan menguji batas kemampuannya dan menentukan apakah
          ia akan berhasil dalam misinya atau gagal dalam upayanya untuk
          mengubah nasibnya.
        </p>
      </div>

      <div className="flex py-4 justify-between items-center">
        <h2 className="text-xl lg:text-2xl text-semibold">Chapter 1</h2>

        <div className="space-x-2">
          <Link href="/audiobooks">
            <Button size="sm" variant="outline">
              Prev
            </Button>
          </Link>
          <Link href="/audiobooks">
            <Button size="sm">Next</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
