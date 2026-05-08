<script lang="ts">
  import { Tabs, VariableTabs } from "m3-svelte";
  import Skill from "./Skill.svelte";

  interface Props {
    tab?: "languages" | "additional-qualifications";
    class: string;
  }

  let { tab = "languages", class: className }: Props = $props();

  const items = [
    { name: "Sprachen", value: "languages" },
    { name: "Zusatzqualifikationen", value: "additional-qualifications" },
  ];
</script>

<div class={`cv-tabs ${className}`}>
  <div class="fixed-tabs">
    <Tabs bind:tab {items} secondary />
  </div>
  <div class="variable-tabs">
    <VariableTabs bind:tab {items} secondary />
  </div>
  {#if tab === "languages"}
    <div class="content languages">
      <Skill name="JS/TS" level={3} />
      <Skill name="PHP" level={3} />
      <Skill name="Java" level={2} />
      <Skill name="SQL" level={2} />
      <Skill name="C#" />
      <Skill name="Dart" />
      <Skill name="Kotlin" />
      <Skill name="Swift" />
    </div>
  {:else}
    <div class="content additional-qualifications">
      <table>
        <tbody>
          <tr>
            <td>Zertifizierung als Ibexa-Entwickler</td>
            <td><time datetime="2021-06">Juni 2021</time></td>
          </tr>
          <tr>
            <td>Zertifizierung als Pimcore-Junior-Entwickler</td>
            <td><time datetime="2021-02">Feb. 2021</time></td>
          </tr>
          <tr>
            <td>Zertifizierung über C1-Englischkenntnisse</td>
            <td><time datetime="2019-07">Juli 2019</time></td>
          </tr>
          <tr>
            <td>
              Teilnahme am Endausscheid des Schülerwettbewerbs „Ideenflug“ der
              Airbus Group
            </td>
            <td><time datetime="2016-12">Dez. 2016</time></td>
          </tr>
          <tr>
            <td>
              Sonderpreis beim „Jugend forscht“-Landeswettbewerb
              Nordrhein-Westfalen
            </td>
            <td><time datetime="2016-03">März 2016</time></td>
          </tr>
          <tr>
            <td>
              1. Preis beim „Jugend forscht“-Regionalwettbewerb Niederrhein im
              Fachgebiet Technik
            </td>
            <td><time datetime="2016-02">Feb. 2016</time></td>
          </tr>
        </tbody>
      </table>
    </div>
  {/if}
</div>

<style>
  .cv-tabs {
    break-inside: avoid;
  }
  .variable-tabs {
    display: none;
  }
  .content {
    margin: 8px 16px 0;
  }
  .languages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .additional-qualifications {
    border: 1px solid var(--m3c-surface-variant);
    border-radius: var(--m3-shape-large);
    overflow: hidden;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  td {
    border: 1px solid var(--m3c-surface-variant);
    padding: 8px 16px;
  }
  tr:first-child td {
    border-top: none;
  }
  tr:last-child td {
    border-bottom: none;
  }
  td:first-child {
    border-left: none;
  }
  td:last-child {
    text-align: right;
    border-right: none;
  }
  @media (min-width: 600px) {
    .fixed-tabs {
      display: none;
    }
    .variable-tabs {
      display: unset;
    }
    .variable-tabs :global(.m3-container) {
      padding: 0;
    }
    .content {
      margin: 8px 0 0;
    }
  }
</style>
